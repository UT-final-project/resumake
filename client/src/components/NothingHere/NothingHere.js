import './NothingHere.css'

function NothingHere(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-5">
                    <h1 className="not-found">
                        404: Page Not Found
                    </h1>
                </div>
                <div className="col-md-7">
                    <img className="universe" src="https://raw.githubusercontent.com/UT-final-project/group1-final-project/develop/client/svg-images/undraw_My_universe_re_txot.svg" alt="universe-img"/>
                </div>
            </div>
        </div>
    )
}

export default NothingHere;