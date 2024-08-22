'use client'

import PageLayout from '../../../../../Components/PageLayout/PageLayout';
import styles from '../../../products.module.css'
import { useRouter } from 'next/navigation';


interface IReviews {
  params: {
    reviewId: string;
    prodId: string;
  }
}

const ReviewDetails = ({params} : IReviews ) => {
  const router = useRouter();

  const handleGoBack = () => {
    router.push(`/products/${params?.prodId}`)
  }

  return (
    <PageLayout>
      <h1>Review Details</h1>
      <p>Product Id = {params?.prodId}</p>
      <p>Review Id = {params?.reviewId}</p>
      <button onClick={handleGoBack} className={styles['navigate-button']}>GO BACK TO PRODUCT</button>
    </PageLayout>
  )
}

export default ReviewDetails;