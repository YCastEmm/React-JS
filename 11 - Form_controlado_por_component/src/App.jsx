import Form from "./components/Form";

function App() {

    let onSubmit = (values) =>{
        console.log(values); 
    }


    return (
        <>
            <Form onSubmit={onSubmit} initialState={{text: "desde app", email: "test@test.com"}}>

                {({ values, handleOnChange, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="text"
                            value={values.text}
                            onChange={handleOnChange}
                            name="text"
                        />
                        <input
                            type="email"
                            placeholder="ingrese email"
                            value={values.email}
                            onChange={handleOnChange}
                            name="email"
                        />

                        <button type="submit">Submit</button>
                    </form>
                )}
            </Form>
        </>
    );
}

export default App;
 