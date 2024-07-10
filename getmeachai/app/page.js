
export default function login() {
  return (
    <div>
      <div className=" h-1/3 w-full py-10 flex-col ">
        <div className="flex justify-center itmes-center text-4xl my-2">Buy me a chai</div>
        <div className=" flex justify-center itmes-center">A crowdfunding platform for creators. Get funded by your fans and followers. Start now!</div>
        <div className="flex justify-center itmes-center gap-2 my-2">
          <button type="button" class=" bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start here</button>
          <button type="button" class=" bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read more</button>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10"></div>
      <div className="bg-purple-400 flex flex-col py-20 gap-4">
        <div className="text-3xl flex justify-center">Your fans can buy you a chai!</div>
        <div className="flex flex-wrap justify-evenly">
          <div className="bg-purple-500 rounded-lg w-1/4 py-2">
            <img src="laptop.gif" alt="laptop" width={160} className="rounded-lg m-auto"/>
            <h2 className="text-xl text-center">Fans want to help</h2>
            <p className="text-center">Fans are waiting to help you.</p>
          </div>
          <div className="bg-purple-500 rounded-lg w-1/4 py-2">
            <img src="dollar.gif" alt="laptop" width={160} className="rounded-lg m-auto"/>
            <h2 className="text-xl text-center">Monetize your projects</h2>
            <p className="text-center">Get money by creating new projects.</p>
          </div>
          <div className="bg-purple-500 rounded-lg w-1/4 py-2">
            <img src="unity.gif" alt="laptop" width={160} className="rounded-lg m-auto"/>
            <h2 className="text-xl text-center">Collaborate with other creators</h2>
            <p className="text-center">An easy way to collaborate with others.</p>
          </div>
        </div>
        <div className="flex justify-center"> 
          <button type="button" class=" bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Discover more..</button>
        </div>
      </div>
      <div className="flex flex-col my-2">
        <h2 className="text-center">Learn more about us..</h2>
        <div className="flex justify-center">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/QtaorVNAwbI?si=vZubz-RpZEWH6qUa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  );
}
