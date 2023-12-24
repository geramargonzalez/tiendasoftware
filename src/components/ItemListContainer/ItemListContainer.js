import PropTypes from 'prop-types';

function ItemListContainer({saludo, despedida}) {

    return (
        <div>
            <div>
                {saludo}
            </div>
            <div>
                {despedida}
            </div>
        </div>
        )
}

ItemListContainer.propTypes = {
    saludo: PropTypes.string.isRequired,
    despedida: PropTypes.string.isRequired
};

export default ItemListContainer;