import PropTypes from 'prop-types';

function CartWidget({bodyCart}) {

    return (
        <>
            <div>
                {bodyCart}
            </div>
        </>
        )
}

CartWidget.propTypes = {
    saludo: PropTypes.string.isRequired,
    despedida: PropTypes.string.isRequired
};

export default CartWidget ;