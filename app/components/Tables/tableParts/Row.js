import React from "react";
import PropTypes from "prop-types";
import TableCell from "@material-ui/core/TableCell";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import classNames from "classnames";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/BorderColor";
import DoneIcon from "@material-ui/icons/Done";
import css from "dan-styles/Table.scss";
import EditableCell from "./EditableCell";
import SelectableCell from "./SelectableCell";
import ToggleCell from "./ToggleCell";
import DatePickerCell from "./DatePickerCell";
import TimePickerCell from "./TimePickerCell";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { Manager, Target, Popper } from "react-popper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Fade from "@material-ui/core/Fade";
import Zoom from "@material-ui/core/Zoom";
import Collapse from "@material-ui/core/Collapse";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { NavLink } from "react-router-dom";
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { SourceReader, PapperBlock } from 'dan-components';
import SimplePopover from "../../../containers/UiElements/demos/PopoverTooltip/SimplePopover";


const styles = (theme) => ({
  button: {
    margin: theme.spacing.unit,
  },
});

class Row extends React.Component {
  state = {
    anchorEl: null,
    openGrow: false,
    openSlide: false,
    openCollapse: false,
    openZoom: false,
    flag: false
  };

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleCloseToggle = () => {
    this.setState({
      openGrow: false,
      openSlide: false,
      openCollapse: false,
      openZoom: false,
    });
  };
  startquiz = () => {
    // eslint-disable-next-line
    this.setState({
      flag: true,

    });
  }

  handleToggle = (type) => {
    // eslint-disable-next-line
    this.setState({ [type]: !this.state[type] });
  };
  render() {
    const {
      classes,
      anchor,
      item,
      removeRow,
      updateRow,
      editRow,
      finishEditRow,
      branch,
    } = this.props;
    const eventDel = () => {
      removeRow(item, branch);
    };
    const eventEdit = () => {
      editRow(item, branch);
    };
    const eventDone = () => {
      finishEditRow(item, branch);
    };
    const renderCell = (dataArray) =>
      dataArray.map((itemCell, index) => {
        if (itemCell.name !== "action" && !itemCell.hidden) {
          const inputType = anchor[index].type;
          switch (inputType) {
            case "selection":
              return (
                <SelectableCell
                  updateRow={(event) => updateRow(event, branch)}
                  cellData={{
                    type: itemCell.name,
                    value: item.get(itemCell.name),
                    id: item.get("id"),
                  }}
                  edited={item.get("edited")}
                  key={index.toString()}
                  options={anchor[index].options}
                  branch={branch}
                />
              );
            case "toggle":
              return (
                <ToggleCell
                  updateRow={(event) => updateRow(event, branch)}
                  cellData={{
                    type: itemCell.name,
                    value: item.get(itemCell.name),
                    id: item.get("id"),
                  }}
                  edited={item.get("edited")}
                  key={index.toString()}
                  branch={branch}
                />
              );
            case "date":
              return (
                <DatePickerCell
                  updateRow={(event) => updateRow(event, branch)}
                  cellData={{
                    type: itemCell.name,
                    value: item.get(itemCell.name),
                    id: item.get("id"),
                  }}
                  edited={item.get("edited")}
                  key={index.toString()}
                  branch={branch}
                />
              );
            case "time":
              return (
                <TimePickerCell
                  updateRow={(event) => updateRow(event, branch)}
                  cellData={{
                    type: itemCell.name,
                    value: item.get(itemCell.name),
                    id: item.get("id"),
                  }}
                  edited={item.get("edited")}
                  key={index.toString()}
                  branch={branch}
                />
              );
            default:
              return (
                <EditableCell
                  updateRow={(event) => updateRow(event, branch)}
                  cellData={{
                    type: itemCell.name,
                    value: item.get(itemCell.name),
                    id: item.get("id"),
                  }}
                  edited={item.get("edited")}
                  key={index.toString()}
                  inputType={inputType}
                  branch={branch}
                />
              );
          }
        }
        return false;
      });
    return (
      <tr className={item.get("edited") ? css.editing : ""}>
        {renderCell(anchor)}
        <TableCell padding="none">
        {/* <Modal isOpen={this.state.flag}>
        <ModalHeader>Modal title</ModalHeader>
        <PapperBlock title="Grade 7" whiteBg icon="ios-information-circle-outline" desc="The classes you are in charge of">
        </PapperBlock>
        <ModalBody>
          Fun quiz
        </ModalBody>
        <ModalFooter>
          <Button color="primary">Do Something</Button>{' '}
          <Button color="secondary">Cancel</Button>
        </ModalFooter>
        </Modal> */}
          <IconButton
            onClick={() => eventEdit(this)}
            className={classNames(
              item.get("edited") ? css.hideAction : "",
              classes.button
            )}
            aria-label="Edit"
          >
            <EditIcon />
          </IconButton>
          <IconButton
            onClick={() => eventDone(this)}
            color="secondary"
            className={classNames(
              !item.get("edited") ? css.hideAction : "",
              classes.button
            )}
            aria-label="Done"
          >
            <DoneIcon />
          </IconButton>
          <IconButton
            onClick={() => eventDel(this)}
            className={classes.button}
            aria-label="Delete"
          >
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <Button
              aria-owns={this.state.anchorEl ? "fade-menu" : null}
              aria-haspopup="true"
              onClick={this.handleClick}
              variant="contained"
              color="primary"
            >
              Quiz
            </Button>
            <Menu
              id="fade-menu"
              anchorEl={this.state.anchorEl}
              open={Boolean(this.state.anchorEl)}
              onClose={this.handleClose}
              TransitionComponent={Fade}
            >
              {/* <MenuItem>
                <NavLink to="/app" style={{ textDecoration: 'none'}}>
                </NavLink>
                <Button onClick={this.startquiz}>Start Quiz</Button>
              </MenuItem> */}
              <SimplePopover />
              <MenuItem>
                <NavLink to="/app/forms/reduxform" style= {{textDecoration: 'none'}}>Edit Quiz</NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink to="/app/charts/compossed-chart" style= {{textDecoration: 'none'}}>Statistic</NavLink>
              </MenuItem>
            </Menu>
          </IconButton>
        </TableCell>
      </tr>
    );
  }
}

Row.propTypes = {
  classes: PropTypes.object.isRequired,
  anchor: PropTypes.array.isRequired,
  item: PropTypes.object.isRequired,
  removeRow: PropTypes.func.isRequired,
  updateRow: PropTypes.func.isRequired,
  editRow: PropTypes.func.isRequired,
  finishEditRow: PropTypes.func.isRequired,
  branch: PropTypes.string.isRequired,
};

export default withStyles(styles)(Row);
