import PropTypes from 'prop-types';

const BookMark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div>
            <h2 className="text-2xl bg-gray-100 py-2 border border-orange-600">{title}</h2>
        </div>
    );
};
BookMark.propTypes = {
    bookmark: PropTypes.object
}
export default BookMark;