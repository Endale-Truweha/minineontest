import Link from "next/link";
import { FC } from "react";

interface IssueCardProps {
    id:string;
  description: string;
  status: string;

}

const IssueCard: FC<IssueCardProps> = ({ id,description, status}) => {
  return (
    <Link href={`/protected/detail/${id}`}>
    <div className="bg-white shadow-md rounded-md p-4">
      <h3 className="text-lg font-semibold mb-2">{description}</h3>
      <p className="text-sm text-gray-600">
        <span className="font-medium">Status:</span> {status}
      </p>
    
    </div>
    </Link>
  );
};

export default IssueCard;
