import { useState, useEffect } from "react";
import kongData from '../data/kong.json';
import { Album } from "../component/album";
import { Modal } from "../component/Modal";

export const Home = () => {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (album) => {
    setSelectedAlbum(album);
    setIsModalOpen(true);
  }
  const closeModal = () => {
    setSelectedAlbum(null);
    setIsModalOpen(false);
  }
  useEffect(()=>{
    const body = typeof document !== "undefined" ? document.body : null;
    if(body){
      body.style.overflow = isModalOpen ? 'hidden' : 'auto';
    } 
    return () => {
      if (body) {
      body.style.overflow = 'auto'
      }
    }
  },[isModalOpen]);
  return(
    <main className="text-base">
      <section className="flex flex-wrap gap-8 justify-center max-w-sm mx-auto">
        {kongData.map((album,index)=>(
          <Album key={index} album={album} onClick={()=>openModal(album)}/>
        ))}
      </section>
      {isModalOpen &&(
        <Modal album={selectedAlbum} onClose={closeModal} />
      )}
    </main>
  );
}