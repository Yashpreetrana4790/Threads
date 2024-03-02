import React from 'react';
import { Heart, ChevronDownIcon, PlusIcon, StarIcon, CircleIcon } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { formatDistanceToNow } from 'date-fns';



interface Props {
  name: string;
  postdetail: string;
  likes: number;
  tags: string[];
  authorImage: string;
  id: number;
  joindate: Date

}


const UserCard = ({ name, postdetail, tags, likes, id, joindate }: Props) => {

  const timeAgo = formatDistanceToNow(joindate, { addSuffix: true });
  return (

    <>
      <div className="w-full  max-w-[300px]">
        <Card className="relative">
          <CardHeader className="grid  gap-4">
            <div className="space-y-1  w-full">
              <CardTitle >
                <span className='line-clamp-1 mt-2'>

                  {name}
                </span>
              </CardTitle>
              <CardDescription>
                {postdetail}
              </CardDescription>

            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <div className='grid grid-flow-row-dense gap-1'>
                {tags ? (
                  <div className='flex flex-wrap gap-2'>
                    {tags.map((tag, index) => (
                      <div className='flex items-center space-y-2' key={index}>
                        <span className="bg-slate-200 rounded-full px-4 py-1 truncate text-slate-900">
                          {tag}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : ""}
              </div>
            </div>

            <div className='flex  justify-between mt-3'>

              <div className="flex items-center">
                <StarIcon className="mr-1 h-5 w-5" />
                {likes}
              </div>
              <div>
                <span className='text-slate-400 text-[12px]'>

                  {timeAgo}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </>
  );
};

export default UserCard;
