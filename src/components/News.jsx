import React, { useEffect } from 'react'


const News = () => {
useEffect(()=>{
	window.scrollTo(0,0)
},[])
	return (
 <>
    <div className='text-center'>
    <p className='py-8 font-bold text-3xl text-yellow-300'>News</p>
    <div>
    <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
	<div className="container p-6 mx-auto space-y-8">
		<div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
			<article className="flex flex-col dark:bg-gray-900">
				<a rel="noopener noreferrer" href="/" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://static1.srcdn.com/wordpress/wp-content/uploads/2023/04/rey-jedi-order-mandalorian.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5" />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<h3 className="flex-1 py-2 text-yellow-300 text-lg font-semibold leading-snug">2 Star Wars Movies In 2026</h3>
                    <p className='text-sm'>Disney has offered a massive update by confirming that two new Star Wars movies are arriving in 2026, a year after the initial 2025 release slot.</p>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
						<span>June 10, 2023</span>
						<span>2.1K views</span>
					</div>
				</div>
			</article>

			<article className="flex flex-col dark:bg-gray-900">
				<a rel="noopener noreferrer" href="/" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://static1.srcdn.com/wordpress/wp-content/uploads/2023/06/margot-robbie-and-the-dreamhouse-in-barbie.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5" />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<h3 className="flex-1 py-2 text-yellow-300 text-lg font-semibold leading-snug">"My Goal In Life"</h3>
                    <p className='text-sm'>Margot Robbie reveals the one important thing she had to have from director Greta Gerwig before filming could begin on the Barbie movie.</p>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
						<span>May 15, 2023</span>
						<span>1.9K views</span>
					</div>
				</div>
			</article>

			<article className="flex flex-col dark:bg-gray-900">
				<a rel="noopener noreferrer" href="/" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://static1.srcdn.com/wordpress/wp-content/uploads/2023/02/wade-in-elemental.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5" />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<h3 className="flex-1 py-2 text-yellow-300 text-lg font-semibold leading-snug">Pixar's New Movie</h3>
                    <p className='text-sm'>Pixar's upcoming new film, Elemental, fights back on Rotten Tomatoes as its score jumps 23%, giving the movie a fresh rating on the site.</p>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
						<span>May 8, 2023</span>
						<span>2.3K views</span>
					</div>
				</div>
			</article>

			<article className="flex flex-col dark:bg-gray-900">
				<a rel="noopener noreferrer" href="/" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://static1.srcdn.com/wordpress/wp-content/uploads/2023/06/the-spot-bagel-spider-verse.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5" />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<h3 className="flex-1 py-2 text-yellow-300 text-lg font-semibold leading-snug">Spider-Verse Cosplay Gains</h3>
                    <p className='text-sm'>Following the release of Spider-Man: Across the Spider-Verse, a viral cosplay from the original movie gets deeper meaning after four years.</p>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
						<span>April 23, 2023</span>
						<span>2.7K views</span>
					</div>
				</div>
			</article>

			<article className="flex flex-col dark:bg-gray-900">
				<a rel="noopener noreferrer" href="/" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://static1.srcdn.com/wordpress/wp-content/uploads/2023/03/teenage-mutant-ninja-turtles-mutant-mayhem.jpg?q=50&fit=crop&w=680&h=400&dpr=1.5" />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<h3 className="flex-1 py-2 text-yellow-300 text-lg font-semibold leading-snug">TMNT: Mutant Mayhem</h3>
                    <p className='text-sm'>Teenage Mutant Ninja Turtles: Mutant Mayhem is getting some seriously positive buzz as the first reactions hype the franchise's latest animated movie.</p>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
						<span>April 7, 2023</span>
						<span>1.6K views</span>
					</div>
				</div>
			</article>
			<article className="flex flex-col dark:bg-gray-900">
				<a rel="noopener noreferrer" href="/" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://static1.srcdn.com/wordpress/wp-content/uploads/2023/06/henry-cavill-s-superman-costume-in-batman-v-superman-dawn-of-justice.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5" />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<h3 className="flex-1 py-2 text-yellow-300 text-lg font-semibold leading-snug">James Gunn Gives Update</h3>
                    <p className='text-sm'>Superman: Legacy writer-director James Gunn shares an update on the development of the new Superman costume for the upcoming DC Universe reboot.</p>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
						<span>March 19, 2023</span>
						<span>2.5K views</span>
					</div>
				</div>
			</article>
			<article className="flex flex-col dark:bg-gray-900">
				<a rel="noopener noreferrer" href="/" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://static1.srcdn.com/wordpress/wp-content/uploads/2023/06/anthony-ramos-and-optimus-prime-in-transformers-rise-of-the-beasts.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5" />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<h3 className="flex-1 py-2 text-yellow-300 text-lg font-semibold leading-snug"> Transformers 8 </h3>
                    <p className='text-sm'>Director Steven Caple Jr. reveals he is already in talks for Transformers 8 after the major twist ending setting up future sequels and a crossover.</p>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
						<span>March 12, 2023</span>
						<span>2.3K views</span>
					</div>
				</div>
			</article>
		</div>
	</div>
</section>
    </div>
    </div>
 </>
  )
}

export default News
