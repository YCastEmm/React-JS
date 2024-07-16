let fetchXML = async () => {
    try {
        const response = await fetch('https://drive.google.com/file/d/1RlaVhDJ9reTuKDWMbsS-Y5kOSDuUW8JI/view?usp=sharing'); // Ajusta la ruta según la ubicación real del archivo XML
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const xmlString = await response.text(); // Obtener el texto del archivo XML

        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlString, "application/xml");

        // Mostrar el XML parseado en la consola
        console.log(xmlDoc);

        return xmlDoc;
    } catch (error) {
        console.error('Error al cargar el archivo XML:', error);
        throw error;
    }
}

export default fetchXML;
