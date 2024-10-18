// import { HomePage } from './homePage.js';
// import { LoginPage } from './login.js';
// import { RegistrationPage } from './registration.js';
// import { Dashboard } from './dashboard.js';
// import { Test } from './test.js'

import { renderDashboard } from './dashboard.js';
import { renderHomePage } from './homePage.js';
import { renderLoginPage } from './login.js';
import { renderPlayMods } from './play-mods.js';
import { renderRegistrationPage } from './registration.js';

// export function router() {
//     const routes = {
//         '/': HomePage,
//         '/login': LoginPage,
//         '/register': RegistrationPage,
//         '/dashboard': Dashboard,
//     };

//     const path = window.location.pathname;
//     const PageComponent = routes[path] || HomePage;

//     // Clear the current page content
//     document.body.innerHTML = '';

//     // Append the new page component
//     const page = new PageComponent();
//     document.body.appendChild(page);
// }

// // Listen for changes in the URL
// window.addEventListener('popstate', router);

// // Initial page load
// document.addEventListener('DOMContentLoaded', router);


// import { HomePage } from './homePage.js';
// import { LoginPage } from './login.js';
// import { RegistrationPage } from './registration.js';
// import { Dashboard } from './dashboard.js';
// import { Test } from './test.js';

// export function router() {
//     const routes = {
//         '/': HomePage,
//         '/login': LoginPage,
//         '/register': RegistrationPage,
//         '/dashboard': Dashboard,
//         '/test': Test,
//     };

//     const path = window.location.pathname;
//     const PageComponent = routes[path] || HomePage;

//     // Clear existing content
//     document.getElementById('body-center').innerHTML = '';

//     // Append the new page component
//     const page = new PageComponent();
//     document.getElementById('body-center').appendChild(page);
// }

// // Listen for changes in the URL
// window.addEventListener('popstate', router);

// // Initial page load
// document.addEventListener('DOMContentLoaded', () => {
//     // Setup initial navigation link listeners
//     document.querySelectorAll('a[data-link]').forEach(link => {
//         link.addEventListener('click', (event) => {
//             event.preventDefault(); // Prevent default anchor behavior
//             const path = link.getAttribute('href');
//             window.history.pushState({}, '', path); // Update the URL
//             router(); // Call the router to update the view
//         });
//     });

//     router(); // Initial page load
// });


// const Router = {
//     init: () => {
//         document.querySelectorAll("a.link").forEach(a => {
//             a.addEventListener("click", event => {
//                 event.preventDefault();
//                 console.log("link clicked");
//                 const url = event.target.getAttribute("href");
//                 Router.go(url);
//             });
//         })
//         window.addEventListener("popstate", event => {
//             Router.go(event.state.route, false);
//         })
//         Router.go(location.pathname);
//     },

//     go: (route, addToHistory=true) => {
//         console.log(`going to ${route}`);
//         if (addToHistory) {
//             history.pushState({route}, '',route);
//         }
//         let pageElement = null;
//         switch (route) {
//             case "/":
//                 pageElement = document.createElement("h1");
//                 pageElement.textContent = "menu";
//                 break;
//             case "order":
//                 pageElement = document.createElement("h1");
//                 pageElement.textContent = "order";
//                 break;
//             default:
//                 if (route.startsWith("/product-")) {
//                     pageElement = document.createElement("h1");
//                     pageElement.textContent = "Details";
//                     const paramId = route.substring(route.lastIndexOf("-")+1);
//                     pageElement.dataset.id = paramId;
//                 }
//         }
//         if (pageElement) {
//             document.querySelector("main").innerHTML = "";
//             document.querySelector("main").appendChild(pageElement);
//             window.scrollX = 0;
//             window.scrollY = 0;
//         }
//     }
// }
// export default Router;
export { renderHomePage } from './homePage.js';
export { renderDashboard } from './dashboard.js';
export { renderRegistrationPage } from './registration.js';
export { renderLoginPage } from './login.js';

function renderPage(page) {
    document.body.innerHTML = '';
    document.body.appendChild(page);
}


export function navigate(route) {
    history.pushState({}, '', route);
    loadPage(route).then(() => {
        console.log('Navigation to', route, 'was successful.');
    }).catch((error) => {
        console.error('Error during navigation:',error);
    });
}

async function ask_refreshing_token() {
    try {
        const response = await fetch('http://localhost:8000/api/users/refresh/', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if (response.ok) {
            console.log('refresh token successful');
            return true;
        }
        else {
            console.log('refresh token failed');
            return false;
        }

    } catch (error) {
        console.log('error',error);
        return false;
    }
}


async function loadPage(route) {
    const startRoutes = {'/': renderHomePage, '/login': renderLoginPage, '/register': renderRegistrationPage};
    const secretRoutes = {'/dashboard': renderDashboard};
    let isAuthenticated = false;
    try {
        const response = await fetch('http://localhost:8000/api/users/checkAuthentication/', {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if (response.ok) {
            isAuthenticated = true;
        } else {
            const data = await response.json();
            if (data.error === 'token expired')
                isAuthenticated = await ask_refreshing_token();
            console.log('error: ' , data.error);
        }
    } catch(error) {
        console.log('Authentication check error:',error);
        isAuthenticated = false;
    }
 

    if (startRoutes[route]) {
        if (isAuthenticated) {
            history.pushState({}, '', '/dashboard');
            return renderPage(secretRoutes['/dashboard']());
        }
        return renderPage(startRoutes[route]());
    }
    else if (secretRoutes[route]) {
        if (isAuthenticated)
            return renderPage(secretRoutes[route]());
        history.pushState({}, '', '/login');
        return renderPage(startRoutes['/login']());
    }
}

window.onpopstate = async () => {
   await loadPage(location.pathname);
}

window.onload = async () => {
    await loadPage(location.pathname || '/');
};

