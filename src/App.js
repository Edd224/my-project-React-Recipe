/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import React, { useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { render } from '@testing-library/react'

const navigation = [
  { name: '', href: '#' },
  { name: '', href: '#' },
  { name: '', href: '#' },
  { name: '', href: '#' },
]

export default function Example() {
  return (
    <div className=" flex relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 background-color: #E8CC8F sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
          </svg>

          <Popover>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <a href="#">
                      <span className="sr-only">Workflow</span>
                    </a>
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Open main menu</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                  {navigation.map((item) => (
                    <a key={item.name} href={item.href} className="font-medium text-gray-500 hover:text-gray-900">
                      {item.name}
                    </a>
                  ))}
                  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                    
                  </a>
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        alt=""
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close main menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <a
                    href="#"
                    className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                  >
                    Log in
                  </a>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <main className="  mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="  text-center sm:text-center">
              <h1 className="text-4xl tracking-tight font-extrabold font-Lobster text-amber-900 sm:text-5xl md:text-6xl">
                <span className="block text-7xl xl:inline">Si hladný ?<br></br></span>{' '}
                <span className="block text-5xl xl:inline text-amber-600">Klikni nižšie pre náhodný recept</span>
              </h1>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md m-auto">
                  <button class="button-primary" id="get_meal"
                    
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-md text-amber-800 md:py-4 md:text-lg md:px-10"
                  >
                    Nájdi recept 🍔
                  </button>




                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}




// function AsyncHooks() {
//   const [search, setSearch] = useState('');

//   function onSubmit(e) {
//     e.preventDefault();
//     console.log(search);
//   }
//   return (
//     <div>
//       <form onSubmit={(onSubmit)}>
//         <input
//           value={search}
//           onChange={e => setSearch(e.target.value) }
//           placeholder="Najdi si recept"
//         />
//         <button type="submit">Najdi si recept</button>
//       </form>
//     </div>


//   )
// }





// const get_meal_btn = document.getElementById('get_meal');
// const meal_container = document.getElementById('meal');

// get_meal_btn.addEventListener('click', () => {
// 	fetch('https://www.themealdb.com/api/json/v1/1/random.php')
// 		.then(res => res.json())
// 		.then(res => {
// 		createMeal(res.meals[0]);
// 	});
// });

// const createMeal = (meal) => {
// 	const ingredients = [];
// 	// Get all ingredients from the object. Up to 20
// 	for(let i=1; i<=20; i++) {
// 		if(meal[`strIngredient${i}`]) {
// 			ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`)
// 		} else {
// 			// Stop if no more ingredients
// 			break;
// 		}
// 	}
	
// 	const newInnerHTML = `
// 		<div class="row">
// 			<div class="columns five">
// 				<img src="${meal.strMealThumb}" alt="Meal Image">
// 				${meal.strCategory ? `<p><strong>Category:</strong> ${meal.strCategory}</p>` : ''}
// 				${meal.strArea ? `<p><strong>Area:</strong> ${meal.strArea}</p>` : ''}
// 				${meal.strTags ? `<p><strong>Tags:</strong> ${meal.strTags.split(',').join(', ')}</p>` : ''}
// 				<h5>Ingredients:</h5>
// 				<ul>
// 					${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
// 				</ul>
// 			</div>
// 			<div class="columns seven">
// 				<h4>${meal.strMeal}</h4>
// 				<p>${meal.strInstructions}</p>
// 			</div>
// 		</div>
// 		${meal.strYoutube ? `
// 		<div class="row">
// 			<hr>

// 			<h5>Video Recipe</h5>
// 			<div class="videoWrapper">
// 				<iframe width="420" height="315"
// 				src="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}">
// 				</iframe>
// 			</div>
// 		</div>` : ''}
// 	`;
	
// 	meal_container.innerHTML = newInnerHTML;
// }







