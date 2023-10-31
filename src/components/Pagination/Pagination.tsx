import Button from "../Button/Button";
import nextIcon from "../../assets/images/next_icon.svg";
import endIcon from "../../assets/images/end_icon.svg";

const Pagination = () => {
  return (
    <section>
      <Button src={endIcon} />
      <Button src={nextIcon} />

      <form>
        <input />
        <span></span>
      </form>

      <Button src={nextIcon} />
      <Button src={endIcon} />
    </section>
  );
};

export default Pagination;
