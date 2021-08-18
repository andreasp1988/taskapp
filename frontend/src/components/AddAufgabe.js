import ButtonAddUpd from "./ButtonAddUpd";
import Nav from "./Nav";
import '../css/AddUpdAufgabe.css'

const AddAufgabe = () => {
    return (
        <>
            <div className="addAufgabe">
                <h1>Aufgabe hinzufügen</h1>
                <form action="">
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="" id="name" placeholder="Kleiderschrank ausmisten" />
                    </div>
                    <div>
                        <label htmlFor="datum">Datum</label>
                        <input type="text" name="" id="datum" placeholder="27.08.2021" />
                    </div>
                    <section className="startEnde">
                        <div>
                            <label htmlFor="start">Start</label>
                            <input type="text" name="" id="start" placeholder="10:00" />
                        </div>
                        <div>
                            <label htmlFor="ende">Ende</label>
                            <input type="text" name="" id="ende" placeholder="13:00" />
                        </div>
                    </section>
                    <div>
                        <label htmlFor="descript">Beschreibung</label>
                        <input type="text" name="" id="descript" placeholder="Beschreibung der Tätigkeit" />
                    </div>
                    <section className="category">
                        <label>Kategorie</label>
                        <section>
                            <button>Ausstehend</button>
                            <button>Fertig</button>
                        </section><section>
                            <button>In Bearbeitung</button>
                            <button><img src="/img/plus.png" alt="" /></button>
                        </section>
                    </section>


                </form>
            </div>
            <ButtonAddUpd name="Erstellen" />
            <Nav />
        </>

    );
}

export default AddAufgabe;