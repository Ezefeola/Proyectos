const { render, screen } = require("@testing-library/react");

describe('Pruebas en <GifExpertApp />', () => { 

    test('should', () => { 

        render( <GifExpertApp/> );
        screen.debug();

    });

});