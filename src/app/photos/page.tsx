
"use client"
import PageLayout from '../../Components/PageLayout/PageLayout';
import styles from './photos.module.css'
import {useEffect, useState} from 'react';
import { IPhoto } from './types';
import PhotoList from '@/Components/PhotoLIst/PhotoList';

const getPhotos = async () => {
  const res = await fetch('http://localhost:3000/api/photos');
  const response = await res.json();
  return response.photos;
}

const Photos = () => {
  const [photosCollection, setPhotosCollection] = useState<IPhoto[]>([]);

  useEffect(() => {
    (async () => {
      const photos = await getPhotos();
      setPhotosCollection(photos);
    })();
  }, [])


  return (
    <PageLayout>
        <h1>Photos</h1>
        <div className={styles['photos-container']}>
          <PhotoList photoList={photosCollection}/>
        </div>
    </PageLayout>
  )
}

export default Photos;
