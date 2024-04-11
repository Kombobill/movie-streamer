import React from "react";

const nav = () =>{
    const data = [
        {
            icon: "fas fa-fire=alt",
            name: "Trending",
        },
        {
            icon: "fas fa-film",
            name: "Movies",
        },
        {
            icon: "fas fa-tv",
            name: "Tv Series",
        },
        {
            icon: "fas fa-search",
            name: "Search",
        },
    ];
    return (
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 text-center bg-dark footer">
                    {data.map((Val) => {
                        return (
                            <>
                            <button className="col-sm-2 col-md-2 btn btn-dark">
                                <i className={`${Val.icon}`} id="fire"></i>
                                <br />
                                <h5 className="pt-1 fs-6">{Val.name}</h5>
                            </button>
                            </>
                        );
                    })}
                </div>
            </div>
        </div>
        </>
    );
}
export default nav;