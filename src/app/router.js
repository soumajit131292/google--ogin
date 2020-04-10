// import external modules
import React, { Component, Suspense, lazy } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Spinner from "../components/spinner/spinner";
import { Redirect } from 'react-router'

// import internal(own) modules
import MainLayoutRoutes from "../layouts/routes/mainRoutes";
import FullPageLayout from "../layouts/routes/fullpageRoutes";
import ErrorLayoutRoute from "../layouts/routes/errorRoutes";


// Import Main Layouts
const LazyBasicCard = lazy(() => import("../views/cards/basicCard"));
const LazyExtendedCard = lazy(() => import("../views/cards/extendedCard"));
const LazyStatisticCard = lazy(() => import("../views/cards/statisticCard"));
const LazyAdvancedCard = lazy(() => import("../views/cards/advancedCard"));
const LazyCalender = lazy(() => import("../views/calender/calender"));
const LazyAdminstration = lazy(() => import("../views/administration/admin"));
const LazyRequest = lazy(() => import("../views/requestTaskBuilder/request"));

const LazyLoginPage = lazy(() => import("../views/login/login"))
const LazyLoginHelper = lazy(() => import("../utility/loginHelper/loginHelper"))
const LazyDassDashboard = lazy(() => import("../views/dashboard/dashboard"))
const LazyCreateTemplate = lazy(() => import('../views/createTemplate/createTemplate'))


class Router extends Component {
    render() {
        return (
            <BrowserRouter basename="/">
                
                <Switch>
                        <MainLayoutRoutes
                            exact
                            path="/dashboard"
                            render={matchprops => (
                                <Suspense fallback={<Spinner />}>
                                  {sessionStorage.getItem("token") ?  <LazyDassDashboard {...matchprops} />: <Redirect to="/create-template" />}
                                </Suspense>
                            )}
                        />

                        <FullPageLayout
                            exact
                            path="/"
                            render={matchprops => (
                                <Suspense fallback={<Spinner />}>
                                    <LazyLoginPage {...matchprops} />
                                </Suspense>
                            )}
                        />
                        <MainLayoutRoutes
                            exact
                            path="/test"
                            render={matchprops => (
                                <Suspense fallback={<Spinner />}>
                                    <LazyLoginHelper {...matchprops} />
                                </Suspense>
                            )}
                        />

                        <MainLayoutRoutes
                            exact
                            path="/create-template"
                            render={matchprops => (
                                <Suspense fallback={<Spinner />}>
                                   {sessionStorage.getItem("token") ?  <LazyCreateTemplate {...matchprops} />: <Redirect to="/" />}
                                </Suspense>
                            )}
                        />

                    // {/* Calender */}
                    <MainLayoutRoutes
                        exact
                        path="/calender"
                        render={matchprops => (
                            <Suspense fallback={<Spinner />}>
                                <LazyCalender {...matchprops} />
                            </Suspense>
                        )}
                    />
                    //{/* Cards */}
                    <MainLayoutRoutes
                        exact
                        path="/cards/basic-card"
                        render={matchprops => (
                            <Suspense fallback={<Spinner />}>
                                <LazyBasicCard {...matchprops} />
                            </Suspense>
                        )}
                    />
                    <MainLayoutRoutes
                        exact
                        path="/cards/extended-card"
                        render={matchprops => (
                            <Suspense fallback={<Spinner />}>
                                <LazyExtendedCard {...matchprops} />
                            </Suspense>
                        )}
                    />
                    <MainLayoutRoutes
                        exact
                        path="/cards/statistic-card"
                        render={matchprops => (
                            <Suspense fallback={<Spinner />}>
                                <LazyStatisticCard {...matchprops} />
                            </Suspense>
                        )}
                    />
                    <MainLayoutRoutes
                        exact
                        path="/cards/advanced-card"
                        render={matchprops => (
                            <Suspense fallback={<Spinner />}>
                                <LazyAdvancedCard {...matchprops} />
                            </Suspense>
                        )}
                    />
                    <MainLayoutRoutes
                        exact
                        path="/adduser"
                        render={matchprops => (
                            <Suspense fallback={<Spinner />}>
                                 {sessionStorage.getItem("token") ?  <LazyAdminstration {...matchprops} />: <Redirect to="/" />}
                            </Suspense>
                        )}
                    />

                    // {/* Request Task Builder */}
                    <MainLayoutRoutes
                        exact
                        path="/request"
                        render={matchprops => (
                            <Suspense fallback={<Spinner />}>
                               {sessionStorage.getItem("token") ?  <LazyRequest {...matchprops} />: <Redirect to="/" />}
                            </Suspense>
                        )}
                    />
                </Switch>    
                      
            </BrowserRouter>
        );
    }
}
export default Router;



















