import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  fetchAction,
  addAction,
  removeAction,
  updateAction,
  editAction,
  saveAction,
  closeNotifAction,
} from 'dan-actions/CrudTbActions';
import { CrudTable, Notification } from 'dan-components';
import styles from 'dan-components/Tables/tableStyle-jss';
import Button from '@material-ui/core/Button';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import FileCopyIcon from '@material-ui/icons/ContentCopy';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import ShareIcon from '@material-ui/icons/Share';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

// Reducer Branch
const branch = 'crudTableDemo';

const anchorTable = [
  {
    name: 'id',
    label: 'Id',
    type: 'static',
    initialValue: '',
    hidden: true,
  },
  {
    name: 'category',
    label: 'Class',
    type: 'selection',
    initialValue: '7A',
    options: ['7A', '7B', '7C', '7D', '8A', '8B', '8C', '8D'],
    width: 'auto',
    hidden: false,
  },

  {
    name: 'date',
    label: 'Starting Date',
    type: 'date',
    initialValue: new Date(),
    width: 'auto',
    hidden: false,
  },
  {
    name: 'time',
    label: 'Starting Time',
    type: 'time',
    initialValue: new Date(),
    width: 'auto',
    hidden: false,
  },
  {
    name: 'name',
    label: 'Name',
    type: 'text',
    initialValue: '',
    width: 'auto',
    hidden: false,
  },
  {
    name: 'available',
    label: 'Available',
    type: 'toggle',
    initialValue: true,
    width: '100',
    hidden: false,
  },
  {
    name: 'edited',
    label: '',
    type: 'static',
    initialValue: '',
    hidden: true,
  },
  {
    name: 'action',
    label: 'Action',
    type: 'static',
    initialValue: '',
    hidden: false,
  },
];
const dataApi = [
  {
    id: 1,
    category: '7A',
    price: '49.99',
    date: '4/3/2021',
    time: 'Tue Apr 03 2021 00:00:00 GMT+0700 (WIB)',
    name: 'Fun quiz',
    available: true,
    edited: false,
  },
  {
    id: 2,
    category: '8B',
    price: '9.99',
    date: '4/2/2021',
    time: 'Tue Apr 03 2021 00:00:00 GMT+0700 (WIB)',
    name: 'Carbonhydrate quiz',
    available: true,
    edited: false,
  },
  {
    id: 3,
    category: '7D',
    price: '29.99',
    date: '4/1/2021',
    time: 'Tue Apr 03 2021 00:00:00 GMT+0700 (WIB)',
    name: 'Organic chemistry',
    available: false,
    edited: false,
  },
  {
    id: 4,
    category: '8B',
    price: '99.99',
    date: '3/30/2021',
    time: 'Tue Apr 03 2021 00:00:00 GMT+0700 (WIB)',
    name: 'Theory quiz',
    available: true,
    edited: false,
  },
  {
    id: 5,
    category: '8A',
    price: '399.99',
    date: '3/29/2021',
    time: 'Tue Apr 03 2021 00:00:00 GMT+0700 (WIB)',
    name: 'Calculation quiz',
    available: false,
    edited: false,
  },
  {
    id: 6,
    category: '7C',
    price: '199.99',
    date: '3/28/2021',
    time: 'Tue Apr 03 2021 00:00:00 GMT+0700 (WIB)',
    name: 'Atom quiz',
    available: true,
    edited: false,
  },
];

class CrudTableDemo extends Component {
  render() {
    const {
      classes,
      fetchData,
      addEmptyRow,
      dataTable,
      removeRow,
      updateRow,
      editRow,
      finishEditRow,
      closeNotif,
      messageNotif,
    } = this.props;
    return (
      <div>
        <Notification close={() => closeNotif(branch)} message={messageNotif} />
        <div className={classes.rootTable}>
          <CrudTable
            dataInit={dataApi}
            anchor={anchorTable}
            title="New Quiz"
            dataTable={dataTable}
            fetchData={fetchData}
            addEmptyRow={addEmptyRow}
            removeRow={removeRow}
            updateRow={updateRow}
            editRow={editRow}
            finishEditRow={finishEditRow}
            branch={branch}
          />
          {/* <SpeedDial
            ariaLabel="SpeedDial openIcon example"
            className={classes.speedDial}
            hidden={hidden}
            icon={<SpeedDialIcon openIcon={<EditIcon />} />}
            onBlur={this.handleClose}
            onClick={this.handleClick}
            onClose={this.handleClose}
            onFocus={this.handleOpen}
            onMouseEnter={this.handleOpen}
            onMouseLeave={this.handleClose}
            open={open}
          >
            {actions.map((action) => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                onClick={this.handleClick}
              />
            ))}
          </SpeedDial> */}
        </div>
      </div>
    );
  }
}

CrudTableDemo.propTypes = {
  classes: PropTypes.object.isRequired,
  fetchData: PropTypes.func.isRequired,
  dataTable: PropTypes.object.isRequired,
  addEmptyRow: PropTypes.func.isRequired,
  removeRow: PropTypes.func.isRequired,
  updateRow: PropTypes.func.isRequired,
  editRow: PropTypes.func.isRequired,
  finishEditRow: PropTypes.func.isRequired,
  closeNotif: PropTypes.func.isRequired,
  messageNotif: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  force: state, // force state from reducer
  dataTable: state.getIn([branch, 'dataTable']),
  messageNotif: state.getIn([branch, 'notifMsg']),
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: bindActionCreators(fetchAction, dispatch),
  addEmptyRow: bindActionCreators(addAction, dispatch),
  removeRow: bindActionCreators(removeAction, dispatch),
  updateRow: bindActionCreators(updateAction, dispatch),
  editRow: bindActionCreators(editAction, dispatch),
  finishEditRow: bindActionCreators(saveAction, dispatch),
  closeNotif: bindActionCreators(closeNotifAction, dispatch),
});

const CrudTableMapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(CrudTableDemo);

export default withStyles(styles)(CrudTableMapped);
