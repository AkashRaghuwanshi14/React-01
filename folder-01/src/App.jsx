import React from 'react'
import Card from './components/Card'

const App = () => {
   
 const arr= [
  {
    "company_icon": "https://tse3.mm.bing.net/th/id/OIP.IRxxFai8PM_rkeev7tx-sQHaHa?pid=Api&P=0&h=180",
    "company_name": "Google",
    "position": "Senior UI/UX Designer",
    "tag1": "Full-time",
    "tag2": "Senior Level",
    "price": "$145/hr",
    "location": "Mumbai, India"
  },
  {
    "company_icon": "https://tse3.mm.bing.net/th/id/OIP.IRxxFai8PM_rkeev7tx-sQHaHa?pid=Api&P=0&h=180",
    "company_name": "Meta",
    "position": "Staff Product Designer",
    "tag1": "Full-time",
    "tag2": "Expert Level",
    "price": "$185/hr",
    "location": "Menlo Park, USA"
  },
  {
    "company_icon": "https://tse3.mm.bing.net/th/id/OIP.IRxxFai8PM_rkeev7tx-sQHaHa?pid=Api&P=0&h=180",
    "company_name": "Apple",
    "position": "Senior Human Interface Designer",
    "tag1": "Full-time",
    "tag2": "Senior Level",
    "price": "$160/hr",
    "location": "Hyderabad, India"
  },
  {
    "company_icon": "https://tse3.mm.bing.net/th/id/OIP.IRxxFai8PM_rkeev7tx-sQHaHa?pid=Api&P=0&h=180",
    "company_name": "Amazon",
    "position": "Lead UX Researcher",
    "tag1": "Part-time",
    "tag2": "Senior Level",
    "price": "$115/hr",
    "location": "Bengaluru, India"
  },
  {
    "company_icon": "https://tse3.mm.bing.net/th/id/OIP.IRxxFai8PM_rkeev7tx-sQHaHa?pid=Api&P=0&h=180",
    "company_name": "Netflix",
    "position": "Senior Content Designer",
    "tag1": "Full-time",
    "tag2": "Senior Level",
    "price": "$210/hr",
    "location": "Mumbai, India"
  },
  {
    "company_icon": "https://tse3.mm.bing.net/th/id/OIP.IRxxFai8PM_rkeev7tx-sQHaHa?pid=Api&P=0&h=180",
    "company_name": "Microsoft",
    "position": "Principal UI Engineer",
    "tag1": "Full-time",
    "tag2": "Expert Level",
    "price": "$175/hr",
    "location": "Redmond, USA"
  },
  {
    "company_icon": "https://tse3.mm.bing.net/th/id/OIP.IRxxFai8PM_rkeev7tx-sQHaHa?pid=Api&P=0&h=180",
    "company_name": "NVIDIA",
    "position": "Senior Graphics Designer (AI)",
    "tag1": "Contract",
    "tag2": "Senior Level",
    "price": "$130/hr",
    "location": "Pune, India"
  },
  
  {
    "company_icon": "https://tse3.mm.bing.net/th/id/OIP.IRxxFai8PM_rkeev7tx-sQHaHa?pid=Api&P=0&h=180",
    "company_name": "NVIDIA",
    "position": "Senior Graphics Designer (AI)",
    "tag1": "Contract",
    "tag2": "Senior Level",
    "price": "$130/hr",
    "location": "Pune, India"
  }
  
]

  return (
   
     <div className='parent'>

     { arr.map(function(item){
        return <Card company_icon={item.company_icon} name=
       {item.company_name} position={item.position}
       tag1={item.tag1} tag2={item.tag2} price={item.price} location={item.location} 
       />
      })
    }
     </div>
   
  )
}

export default App
