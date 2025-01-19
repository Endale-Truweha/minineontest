import React from 'react';
import { getSession } from '@/utils/session';
import Footer from '@/components/footer';
;
import IssueForm from '@/components/issueForm';

async function Page() {
  const session = await getSession();

  return (
    <div>  
    <div className='bg-ethBlack-600  flex  items-center justify-center '>
     
    <div className=' text-white w-full h-full min-h-screen font-bold flex flex-col  mb-60'>
    {session?.user && (
        <div>{JSON.stringify(session.user)}</div>
      )}
     
    <div className='flex flex-col rounded-t-[48px] bg-ethBlack-500 border-t-2 shadow-2xl border-ethYellow-500 w-full grow p-8'>
      
     <IssueForm/>
    </div>
    </div>
    </div>
    <Footer/></div>
  );
}

export default Page;