import Image from "next/image";

export default function Credit() {
    return (
        <div>
            <div className="bg-blue-900 mt-20 w-full justify-center flex">
                <div className="mt-10 mb-10 w-2/3 flex justify-between text-white">
                    <div className="flex">
                        <Image
                            src="/images/obac-logo.png"
                            alt="obac-logo"
                            width={70}
                            height={20}
                            className="p-1 w-auto h-16"
                        />
                        {/* Name university */}
                        <div className="flex flex-col justify-start font-inter font-bold p-2 pl-6 ">
                            <span className="sm:text-lg ">
                                Ekawit Business Administration Vocational College
                            </span>
                            <span className="sm:text-sm ">วิทยาลัยอาชีวศึกษาเอกวิทย์บริหารธุรกิจ</span>
                        </div>
                    </div>
                    <div className="w-60">
                        <div>
                            5 ซอย ลาดกระบัง 34/1 ถนน ลาดกระบัง แขวงลาดกระบัง เขตลาดกระบัง กรุงเทพมหานคร 10520
                        </div>
                        <div className="mt-2">
                            02 327 2992
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center py-8 bg-blue-900 text-white">
                <p>© 2024 เอกวิทย์ยชาการวิทยาลัย | All rights reserved</p>
            </div>
        </div>
    );
}