import {

	SearchOutline,
	SettingsOutline,
	ShareSocialOutline,
} from "react-ionicons";

const Navbar = () => {
	return (
		<div className="md:w-[calc(100%-230px)] w-[calc(100%-60px)] fixed flex items-center justify-end pl-2 pr-6 h-[70px] top-0 md:left-[230px] left-[60px] border-b border-slate-300 bg-[#fff] gap-4">
			
			<div className="md:w-[300px] w-[130px] bg-gray-100 rounded-lg px-3 py-[10px] flex items-center gap-2">
				<SearchOutline color={"#999"} />
				<input
					type="text"
					placeholder="Search"
					className="w-full bg-gray-100 outline-none text-[15px]"
				/>
			</div>
			<div className="md:flex hidden items-center gap-4">
				<div className="grid place-items-center bg-gray-100 rounded-full p-2 cursor-pointer">
					<ShareSocialOutline color={"#444"} />
				</div>
				<div className="grid place-items-center bg-gray-100 rounded-full p-2 cursor-pointer">
					<SettingsOutline color={"#444"} />
				</div>
				
			</div>
		</div>
	);
};

export default Navbar;
