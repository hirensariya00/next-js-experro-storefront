import {ContentService} from "@/services";

const PageDataComponent = async () => {
    const pagePromise = await ContentService.getPageDataBySlug({
        pageSlug: '/',
        versionId: 'a2858bac-0d04-4e52-a2f6-43863c193129-72',
        lang: 'en-us'
    });
    console.log('test', pagePromise)
    return <></>
}
export default PageDataComponent
