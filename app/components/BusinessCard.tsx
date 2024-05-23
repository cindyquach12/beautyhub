// make mock business data using supabase/firebase to populate dynamically?
import {Star} from 'lucide-react';

export default function BusinessCard(){
    return (
        <div className="border rounded-sm h-[300px]">
            <div className="business-details border-b pl-3 py-2 ">
                <h4 className="text-lg">Mock business</h4>
                <div className='flex items-center my-1'>
                    <p>5</p> <Star className='ml-1 mr-2 size-[14px]'/> <p className='text-sm'>(1337 reviews)</p>
                </div>
                <p className="text-xs text-gray-400">500 W Main St, Tustin</p>
            </div>
            <img src="" alt="business picture" className="s-fit"/>
        </div>
    )
}