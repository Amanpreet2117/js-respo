import React from 'react'

function Pagehdr(props) {
    return (
        <>
          {/* <!-- Page Header Start --> */}
    <aman class="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="container text-center py-5">
            <h1 class="display-2 text white mb-4 animated slideInDown">{props.name}</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol class="breadcrumb justify-content-center mb-0">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item"><a href="#">Pages</a></li>
                    <li class="breadcrumb-item text-primary" aria-current="page">{props.page}</li>
                </ol>
            </nav>
            
        </div>
    </aman>
    {/* <!-- Page Header End --> */}
        </>
    )
}

export default Pagehdr
