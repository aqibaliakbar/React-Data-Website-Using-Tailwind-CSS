import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
	return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[500px] mx-auto my-4"
          src={Laptop}
          alt="AnalyticsImg"
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">Data Analytics Dashboard</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque amet ullam esse aliquam itaque distinctio dignissimos asperiores eligendi recusandae fuga, facere ipsa fugit. Dolorum est eaque cum, voluptas eos ut?</p>
					<button className="text-[#00df9a] w-[200px] rounded-md font-medium my-6 md:mx-0 mx-auto py-3 bg-black"> Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Analytics
