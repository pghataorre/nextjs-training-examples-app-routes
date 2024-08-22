import PageLayout from '../../Components/PageLayout/PageLayout';
import Link from 'next/link';

const Products = () => {
    return (
      <PageLayout>
        <h1>Products default</h1>
        <ul>
          <li>
              <Link href="/products/1">PRODUCT 1</Link>
          </li>
          <li>
              <Link href="/products/2">PRODUCT 2</Link>
          </li>      
          <li>
              <Link href="/products/3">PRODUCT 3</Link>
          </li>        
        </ul>
      </PageLayout>
    )
}

export default Products;