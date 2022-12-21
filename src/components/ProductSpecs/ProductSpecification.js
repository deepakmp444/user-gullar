function ProductSpecification({ value }) {
  return <div dangerouslySetInnerHTML={{ __html: value }} />;
}

export default ProductSpecification;
