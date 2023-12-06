// import {DraggableArea} from 'experro-storefront';
import ExpBlogListing from './blog-listing';
import ExpLinkParser from '../../cms-utils/link-parser';
// import Link from 'next/link';

export interface BlogPageProps {
    pageData: any;
    components: any;
}

const BlogPage = (props: BlogPageProps) => {
    const {pageData, components} = props;

    return (
        <div>
            <div className="page-body blog-list-page-template">
                <div className="breadcrumb-section">
                    <div className="container">
                        <ul className="breadcrumb">
                            <li>
                                {/*<Link to={'/'}>Home</Link>*/}
                            </li>

                            {window.location.pathname !== '/blog/' ? (
                                <>
                                    <li>
                                        <ExpLinkParser to={'/blog/'}>Blog</ExpLinkParser>
                                    </li>
                                    <li>{pageData?.page_title_esi}</li>
                                </>
                            ) : (
                                <li>Blog</li>
                            )}
                        </ul>
                    </div>
                </div>

                {/*<DraggableArea*/}
                {/*    style={{width: 'auto'}}*/}
                {/*    cssClass={''}*/}
                {/*    id={'blog-page-drop1'}*/}
                {/*    components={components}*/}
                {/*    modelField={''}*/}
                {/*    pageData={pageData}*/}
                {/*/>*/}

                {/* ------ Blog-Listing --------------*/}
                <ExpBlogListing pageData={pageData}/>
            </div>
        </div>
    );
};

export default BlogPage;
