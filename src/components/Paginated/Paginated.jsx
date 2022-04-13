import React from 'react';
import style from './Paginated.module.css';
import ReactPaginate from 'react-paginate';


const Paginated = ({ events, setCurrentPage, eventsPerPage }) => {

    // const pageCount = Math.ceil(events/eventsPerPage)
    const pageCount = 11;

    // Cuando tenga todas la info de los eventos, acá calculo cuantas páginas debería haber en el pages:
    // for (let i = 0; i <= Math.ceil(events/6); i++){
    //     pages.push(i);
    // };

    const changePage = ({selected}) => {
        // selected es la página que clickeo el usuario a la cual se quiere dirigir.
        setCurrentPage(selected)
    }

    return (
        <div className={style.NavPaginated}>
            <ReactPaginate 
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={style.paginationBttns}
                previousLinkClassName={style.previousBttn}
                nextLinkClassName={style.nextBttn}
                disabledClassName={style.paginationDisabled}
                activeClassName={style.paginationActive}
            />
        </div>
    )
};

export default Paginated;