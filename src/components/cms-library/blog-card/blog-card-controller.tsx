//@ts-nocheck
'use client'
import {useEffect, useState} from 'react';
import {ContentService} from '../../../services';

const ExpBlogCardController = ({
                                   component_content,
                               }: {
    component_content: any;
}) => {
    const {contentModel, modelInternalName, blog_data} = JSON.parse(
        component_content === undefined ? '{}' : component_content
    );
    const [postData, setPostData] = useState<any>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const getFilterString = () => {
        let filterString: string = '';
        if (blog_data?.category_ids.length) {
            filterString = `categories_exp_rel:("${blog_data?.category_ids
                .split(',')
                .join('" OR "')}")`;
        } else if (blog_data?.author_ids.length) {
            filterString = `author_exp_rel:("${blog_data?.author_ids
                .split(',')
                .join('" OR "')}")`;
        } else if (blog_data?.posts.length) {
            filterString = `content_model_data_id:("${blog_data?.posts
                .split(',')
                .join('","')}")`;
        }
        return filterString;
    };
    const getAPIObject = () => {
        let apiObj: any = {
            modelInternalName: 'posts',
            fieldsToQuery: '*',
            relationField: 'categories_exp_rel,author_exp_rel', // need to give the relation field name to get the data, e.g. here we want to get relation data for categories so need to pass it
            relationFieldDataToQuery: 'page_slug,title',
            sortBy: 'modified_at',
            sortType: 'asc',
            contentDataSortBy: 'modified_at',
            skip: '0',
            limit: blog_data?.limit ? blog_data?.limit : 4,
        };

        //if set as a featured is ticked then only need to add this
        if (blog_data?.show_featured_blogs) {
            apiObj = {
                ...apiObj,
                fieldKey: 'set_as_a_featured_ebi',
                fieldValue: 'true',
            };
        } else {
            apiObj = {...apiObj, fieldKey: 'id', fieldValue: '*'};
        }

        // Add filter if any of the value is selected [author, category or posts]
        if (
            blog_data?.author_ids?.length ||
            blog_data?.category_ids?.length ||
            blog_data?.posts?.length
        ) {
            apiObj = {...apiObj, filter: `${getFilterString()}`};
        }

        return apiObj;
    };
    const getPostData = async () => {
        try {
            const postData =
                await ContentService.getContentModelRecordsByFieldKeyValue(
                    getAPIObject()
                );

            if (postData?.Status === 'success') {
                setPostData(postData?.Data?.items);
            }
        } catch (e) {
            console.error(e);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        if (blog_data?.limit) {
            setPostData([]);
            setIsLoading(true);
            getPostData();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        blog_data?.limit,
        blog_data?.author_ids,
        blog_data?.category_ids,
        blog_data?.posts,
        blog_data?.show_featured_blogs,
    ]);
    return {
        postData,
        isLoading,
        contentModel,
        modelInternalName,
        title: blog_data?.title,
    };
};
export default ExpBlogCardController;
