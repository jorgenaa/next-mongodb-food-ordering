import { GetStaticPaths, GetStaticProps } from 'next';
import type { InferGetStaticPropsType } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { findeOneSlug, getAllProductsFromOneCategory, getUniqueSlugs, url } from 'framework/utils/utilities';
import dbConnect from '@framework/dbConnect';
import productModel from "../../framework/models/Product"

import CategoryMenuNav from '@components/CategoryMenuNav';
import { Layout } from '@components/common';
import { Grid, Heading } from '@components/ui';
import ProductList from '@components/ProductList/ProductList';
import s from "./menu.module.css"

interface Params extends ParsedUrlQuery {
  slug: string;
}

type Path = string

const Menu = ({uniqueProducts, filteredProducts, categoryTitle}: InferGetStaticPropsType<typeof getStaticProps> ) => {
  const path: Path = ""
 
  return( 
        <div className={s.menu}>
          <Heading title={categoryTitle.category_title} classType={s.menu__heading} />
          <Grid classType={s['menu__grid-two']}>
            <CategoryMenuNav uniquePath={path} uniqueProducts={uniqueProducts} /> 
            <div>
                <ProductList products={filteredProducts} path={path} />  
            </div>
          </Grid>
        </div>
)};

Menu.Layout = Layout;


export const getStaticPaths: GetStaticPaths<Params> = async () => {
      // const res = await fetch(`${url}/api/products`) //http://localhost:3000/api/products
      // const products = await res.json()
      dbConnect()
      const res = await productModel.find()
      const product = await JSON.parse(JSON.stringify(res))

      const paths = product.map((product: any) => {
          return { 
            params: {slug: product.slug.toString()},
          }
      });
      return { 
        paths, 
        fallback: false, 
      }
     
}

// let singleCategory, multipleCategory
//     const [singleRes, multipleRes] = await Promise.all([
//       fetch( `${url}/api/products/${params?.slug}`), //http://localhost:3000/api/products/${params?.slug}
//       fetch(`${url}/api/products`) //http://localhost:3000/api/products
//     ]);
   
//   [singleCategory, multipleCategory] = await Promise.all([
//     singleRes.json(), 
//     multipleRes.json(),
//   ]);

 // singleCategory = await productModel.find({slug: params.slug})
    // multipleCategory = await productModel.find()

export const getStaticProps: GetStaticProps = async ({params}: ParsedUrlQuery | undefined | any) => {
  let singleCategory, multipleCategory
  try {
    dbConnect()
    const [singleRes, multipleRes] = await Promise.all([
        productModel.find({slug: params.slug}), 
        productModel.find() 
    ]);
    [singleCategory, multipleCategory] = await Promise.all([
      JSON.parse(JSON.stringify(singleRes)), 
      JSON.parse(JSON.stringify(multipleRes)),
        ]);
   
  } catch (error) {
    console.log(error)
  }

  const key = 'slug';
  const slugs = getUniqueSlugs(multipleCategory, key)

  const uniqueSlug = findeOneSlug(singleCategory, params?.slug);

  const filterProducts = getAllProductsFromOneCategory(singleCategory, params?.slug);
  
  return {
        props: {
            uniqueProducts: slugs,
            filteredProducts: filterProducts,
            categoryTitle: uniqueSlug,
        },
        revalidate: 1
    };
}

export default Menu;

