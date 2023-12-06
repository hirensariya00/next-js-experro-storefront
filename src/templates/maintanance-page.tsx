//@ts-nocheck

// import { Link } from 'experro-storefront';
import logo from '../assets/images/logo-white.png';
// import Link from 'next/link';

const MaintanancePage = () => {
    return (
        <div>
            <div className="page-body maintanance-page-template">
                <div className="page-content">
                    <div className="container-small text-center">
                        <div className="flex flex-wrap align-center flex-direction justify-center maintanance-body">
                            {/*<Link to="/">*/}
                            {/*    <img*/}
                            {/*        // eslint-disable-next-line*/}
                            {/*        src={logo}*/}
                            {/*        alt="Logo"*/}
                            {/*        title="Logo"*/}
                            {/*        width={260}*/}
                            {/*        height={40}*/}
                            {/*    />*/}
                            {/*</Link>*/}
                            <h1 className="text-center m-b-15">Down for Maintenance</h1>
                            <p className="m-b-0">
                                Sorry, this store hasn’t opened yet, or is temporarily down for
                                maintenance. Please check back soon.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MaintanancePage;
