'use client'

import PageLayout from '../../../Components/PageLayout/PageLayout';
import styles from '../products.module.css';
import { useRouter } from 'next/navigation';
import { Metadata } from 'next';

interface IProductsDetails {
  params: {
    prodId: string;
  }
}

const generateMetadata = ({ params }: IProductsDetails): Metadata => {
  return {
    title: `Products ${params.prodId}`,
    description: 'Products in Collection'
  }
}


const ProductsDetails = ({ params }: IProductsDetails ) => {

  const router = useRouter();

  const handleGoBack = () => {
    router.push(`/products`)
  }

  const handleGoToReview = () => {
    router.push(`/products/${params.prodId}/review/20`)
  }

  return (
    <PageLayout>
      <h1>Products Details</h1>
      <p>Products Details Product Id = {params?.prodId}</p>
      <button onClick={handleGoBack} className={styles['navigate-button']}>GO BACK TO PRODUCTS</button>
      <button onClick={handleGoToReview} className={styles['navigate-button']}>READ A PRODUCT REVIEW</button>
    </PageLayout>
  )
}

export default ProductsDetails;