import React from 'react';
import { BarLoader } from 'react-spinners';

const Title = ({ title = "", Subtitle = ""  }) => {
    return (
    <section className=" flex justify-center mt-12 ">
      <div className="text-center ">
        <h1 className="text-xl text-[#25a244]">{Subtitle}</h1>
        <h1 className="text-5xl font-bold ">{title}</h1>
        <div className="flex justify-center mt-5">
            <BarLoader color="#2dc653" width={250} />
        </div>
      </div>
    </section>
    );
};

export default Title;