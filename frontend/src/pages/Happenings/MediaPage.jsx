function MediaPage() {
  return (
    <>
      <div className="container-Media">
        <h2 id="text" className="p-10">
          In the Media
        </h2>
      </div>
      <div className="flex-media m-10 ml-40">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/cdg1snQcoas?si=MwX8IM5bERc45JNz"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/G2gN5vqHOEg?si=T4t-iJu5VTJKjuwF"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/EtxQxbU3a88?si=9NB-6ABStnp1xz6c"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Q88v3SFPwKE?si=hu-Bzfg0qfgw8unY"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
}

export default MediaPage;
