


const SectionTitle = ({heading, subHeading}: {heading: string; subHeading: string}) => {
    return (
        <div className="md:w-5/12 mx-auto text-center my-8">
            <h3 className="text-purple-600 mb-2">{subHeading}</h3>
            <h1 className="text-xl md:text-2xl lg:text-3xl uppercase border-y-2 py-3">{heading}</h1>
        </div>
    );
};

export default SectionTitle;