import React from "react";
import {Link}  from "react-router-dom";

const TarjetaCurso = (props) => {
    return (
        <>
            <div
                className="max-w-sm rounded flex flex-col justify-between pb-5 overflow-hidden shadow-lg bg-rose-500"
                key={props.index}
            >
                <div>
                    <div
                        className="w-full h-60"
                        style={{
                            backgroundImage: `url(${props.curso.foto})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    ></div>

                    <div className="px-6 pt-4 pb-2 flex justify-evenly items-center">
                        {props.curso.hashtag.map((hashtag, index) => {
                            return (
                                <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-900 mr-2 mb-2">
                                    #{hashtag}
                                </span>
                            );
                        })}
                    </div>

                    <div className="px-6 py-4">
                        <div className="font-bold text-center text-xl mb-2 text-white">
                            {props.curso.titulo}
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center">
                    <Link
                        to={`/curso/${props.curso._id}`}
                        className=" bg-gray-200 text-center rounded-full w-6/12 px-3 py-1 text-md font-semibold text-rose-600 hover:bg-rose-700 hover:text-white"
                    >
                        Ver curso
                    </Link>
                </div>
            </div>
        </>
    );
};
export default TarjetaCurso