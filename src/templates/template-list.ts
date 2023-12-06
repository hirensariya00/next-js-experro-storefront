// prettier-ignore
const getTemplates = (templates: any) => {
  const experroTemplateMap = {
    'Default': {
      component: templates['CmsPage'],
      displayName: 'Default',
      contentModel: 'web_pages',
      isDefault: true,
    },
    'Home': {
      component: templates['HomePage'],
      displayName: 'Home',
    },
    'Category': {
      component: templates['CategoryPage'],
      displayName: 'Category',
      contentModel: 'ecommerce_category',
    },
    'Brand': {
      component: templates['BrandPage'],
      displayName: 'Brand',
      contentModel: 'ecommerce_brand',
    },
    'Search': {
      component: templates['SearchPage'],
      displayName: 'Search',
    },
    'Product': {
      component: templates['ProductDetailPage'],
      displayName: 'Product Detail',
      contentModel: 'ecommerce_product',
    },
    'Contact': {
      component: templates['ContactPage'],
      displayName: 'Contact Us',
    },
    'Blog-Page': {
      component: templates['BlogPage'],
      displayName: 'BlogPage',
    },
    'Blog-Detail': {
      component: templates['BlogDetail'],
      displayName: 'BlogDetail',
    },
  };

  return experroTemplateMap;
};

export default getTemplates;
