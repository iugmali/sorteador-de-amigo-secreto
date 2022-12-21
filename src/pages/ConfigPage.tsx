import Form from "../components/Form";
import ListaParticipantes from "../components/ListaParticipantes";
import Footer from "../components/Footer";
import Card from "../components/Card";
import React from "react";

const ConfigPage = () => {
    return (
        <Card>
            <section>
                <h2>Vamos começar!</h2>
                <Form />
                <ListaParticipantes />
                <Footer />
            </section>
        </Card>
    )
}

export default ConfigPage