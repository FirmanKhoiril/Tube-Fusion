import { TbClockRecord } from "react-icons/tb";
import { timePeroidOptions } from "../context/dummyData";

export type TChangeTimePeriodParams = {
  functionCTP: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string | null;
};

const ChangeTimePeriod: React.FC<TChangeTimePeriodParams> = ({ functionCTP, value }: TChangeTimePeriodParams) => {
  return (
    <div className="relative">
      <select
        className="absolute top-0 peer max-w-[72px] w-full h-full opacity-0 text-black bg-secondary-0/5 text-center appearance-none cursor-pointer focus:ring-2 focus:ring-[#10b981] focus:outline-none"
        onChange={functionCTP}
      >
        {timePeroidOptions.map((time, index) => (
          <option key={index} className="font-medium text-center py-2" value={time}>
            {time}
          </option>
        ))}
      </select>
      <button className="py-2 px-3 rounded-md shadow-sm hover:shadow-lg transition duration-200 ease-in-out bg-secondary-0/5 text-white text-sm font-medium flex items-center gap-1 border border-transparent peer-focus:border-[#10b981]">
        <TbClockRecord size={18} />
        {value}
      </button>
    </div>
  );
};

export default ChangeTimePeriod;
