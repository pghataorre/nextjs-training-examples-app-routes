import { IPhoto } from '@/app/photos/types';
import Link from 'next/link';

const PhotoList = ({photoList} : { photoList: IPhoto[] }) => {
  return (
    <ul>
      {
        photoList?.length === 1 
        
        ? (
          <li key={photoList[0].id}>
            <p>{photoList[0].title}</p>
            <img 
              src={photoList[0].thumbnailUrl}
              width={600}
              height={600}
              alt={photoList[0].title} 
            />
        </li>
        ) 
        : 
        photoList?.map((photoItem: IPhoto) => 
          (
            <li key={photoItem.id}>
              <Link href={`/photos/${photoItem.id}`}>
                <p>{photoItem.title}</p>
                <img 
                  src={photoItem.thumbnailUrl}
                  width={150}
                  height={150}
                  alt={photoItem.title} 
                />
              </Link>
            </li>
        ))
      }
    </ul>
  )
}

export default PhotoList;
