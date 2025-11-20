import '../styles/info.css';

export default function Info() {
    return (
        <section id='about'>
        <div className='info'>
            <div className="text">
                <Title />
                <About />
            </div>
        </div>
        </section>
    )
}

function Title() {
    return (
        <>
            <h1 className='title'>A little about me</h1>
        </>
    )
}

function About() {
    return (
        <>
            <p className='prehistory'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
                praesentium, fugiat explicabo assumenda sed error, eaque velit
                optio eum totam nulla! Rerum quibusdam culpa sed asperiores earum,
                voluptatem reiciendis, odit vitae officia non omnis odio saepe accusamus!
                Tempore, temporibus debitis! Id quisquam ratione veniam libero ipsam dicta?
                Vitae at asperiores beatae quisquam animi nihil dicta sit, harum ipsam
                architecto amet? Temporibus non odio ea cumque animi beatae asperiores
                eaque quisquam magni obcaecati quam optio libero fuga, consectetur in
                corporis! Nesciunt reprehenderit eius incidunt, debitis maxime ad aut
                dolor error non. Cum provident error facere assumenda quo quae dignissimos
                impedit expedita!</p>
        </>
    )
}