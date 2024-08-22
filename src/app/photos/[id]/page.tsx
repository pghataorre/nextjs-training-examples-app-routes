
"use client"
import PageLayout from '../../../Components/PageLayout/PageLayout';
import styles from '../photos.module.css'
import {useEffect, useState} from 'react';
import { IPhoto } from '../types';
import PhotoList from '@/Components/PhotoLIst/PhotoList';

const getPhotos = async (id: string) => {
  const res = await fetch(`http://localhost:3001/api/photos/${id}`, {
    headers: {
      'Content-type': 'application/json'
    }
  });

  const response = await res.json();  
  return [response.photos];
}

interface IPhotosProps {
  params: {
    id: string;
  };
}

const Photos = ({ params }:IPhotosProps ) => {
  const [photosCollection, setPhotosCollection] = useState<IPhoto[]>([]);
  const { id } = params;



  useEffect(() => {
    (async () => {
      const photos = await getPhotos(id);
      setPhotosCollection(photos);
    })();

  }, []);

  return (
    <PageLayout>
        <h1>Photos</h1>
        <div className={styles['photos-container']}>
          {photosCollection?.length 
            ? (<PhotoList photoList={photosCollection}/>)
            : (<><h2>Loading .... </h2></>)
          }
        </div>
    </PageLayout>
  )
}

export default Photos;
