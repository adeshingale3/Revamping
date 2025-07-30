import { LockKeyhole, Users } from 'lucide-react'
import React from 'react'

const App = () => {
  const cardData = [
  { id: "001", title: "Setup and Customization", Description: "Monitor category balances so you always know how much is left to spend." },
  { id: "002", title: "Real-Time Sync", Description: "All your changes are updated instantly across all devices to keep your data consistent." },
  { id: "003", title: "Budget Alerts", Description: "Get notified when you’re approaching your budget limits to avoid overspending." },
  { id: "004", title: "Spending Insights", Description: "Visual reports help you understand your spending habits and improve financial decisions." }
];


  const bottomCardData = [
    {icon: LockKeyhole, title: "Secure Data", Description: "We treat your financial data like we'd want ours to be treated, by using strong encryption and secure authentication."},
{
    icon: Users,
    title: "Private by Design",
    Description: "Your personal information stays private. We don’t sell data and only store what’s absolutely necessary."
  }
  ]
  return (
    <div className='w-screen h-screen bg-gray-200 flex items-center justify-center'>
      <div className=' w-[70%] h-[98%] flex flex-col items-center gap-2 p-2'>
        {/* Upper div for upper boxes */}
        <div className='w-full h-[30%] flex flex-row gap-2'>
          {/* Upper Boxes */}
          {
            cardData.map((card, idx) => {
              return <div className='w-1/4 h-full bg-[#FFFFFF] rounded-md flex flex-col p-2 pb-4 justify-between'>
                <h6 className='h-[10%] w-full text-[11px]'>{card.id}</h6>
                <div className='h-[40%] w-full flex flex-col'>
                  <h5 className='text-[16px]'>{card.title}</h5>
                  <h6 className='text-[12px]'>{card.Description}</h6>
                </div>
              </div>
            })
          }


        </div>
        <div className=' w-full h-[70%] overflow-hidden flex flex-row justify-between bg-[#FFFFFF] rounded-md p-2'>
          {/* img div */}
          <div className='h-full w-[50%] rounded-lg'>
            <img src="https://i.pinimg.com/736x/43/18/b0/4318b0a02575658a4d065e5810abb1ab.jpg" alt="img" className='object-cover h-full w-full rounded-md' />
          </div>
          <div className='flex flex-col h-full w-[50%] px-4'>
            <h4 className='text-[8px] p-1 mt-2 flex justify-center border-1 border-black rounded-xl w-[15%] text-orange-500'>WOSS Perks</h4>
            <h1 className='text-[50px] leading-none mt-5 font-semibold'>Security, <p />Reinforced</h1>
            <h1 className='text-[14px] leading-none mt-5 text-gray-400'>May be is secure, opensource and built in public. Designed for <p />transperancy, control and community trust.</h1>
            <button className='py-2 px-2 bg-black/80 w-[30%] mt-5 rounded-full text-white text-[12px] shadow-xl shadow-black/50'>Start Contributing</button>
            <h4 className='text-[8px] p-1 mt-10 flex justify-center border-1 border-black/20 rounded-xl w-[15%]'>More Details</h4>
            {/* bottom cards */}
            <div className='flex flex-row mt-2 gap-2 w-full h-[40%]'>
              {/* cards */}
              {bottomCardData.map((bcard, idx) => {
                return <div className='bg-[#F4F5F7] h-full w-[50%] rounded-lg flex flex-col justify-between'>
                <div className='bg-white w-6 h-6 rounded-full mx-4 mt-2 flex items-center justify-center'>
                  <bcard.icon size={10} color='orange' />
                </div>
                <div className='h-18 w-full pb-2 px-2'>
                  <h2 className='text-[12px]'>{bcard.title}</h2>
                  <h4 className='text-[10px]'>{bcard.Description}</h4>
                </div>
              </div>
              })}
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default App