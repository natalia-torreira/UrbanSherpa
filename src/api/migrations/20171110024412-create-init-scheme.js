'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(create_init_tables);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(drop_init_tables);
  }
};

const create_init_tables = `
  create table verticals
  (
    vertical_id integer not null
    constraint verticals_vertical_id_pk
    primary key,
    name varchar(128) not null,
    description varchar(255) not null,
    created_at timestamp default now() not null,
    updated_at timestamp default now() not null,
    updated_by_user_id integer not null
  )
  ;

  comment on table verticals is 'Stores verticals'
  ;

  create table users
  (
    user_id integer not null
    constraint users_user_id_pk
    primary key,
    user_name varchar(255) not null,
    created_at timestamp default now() not null,
    updated_at timestamp default now() not null,
    updated_by_user_id integer not null
  )
  ;

  create unique index users_user_name_uindex
  on users (user_name)
  ;

  comment on table users is 'Stores user accounts independently of the type of user, this is user accounts for managers, admins, sherpas and customers(for the future)'
  ;

  comment on column users.user_name is 'user email to access to the urbansherpa system'
  ;

  create table user_verticals
  (
    user_id integer not null,
    vertical_id integer not null,
    created_at timestamp default now() not null,
    updated_at timestamp default now() not null,
    updated_by_user_id integer not null
  )
  ;

  comment on table user_verticals is 'Stores user verticals. This is verticals by user. A manager might access to specific verticals, but not all. It is required to control this.'
  ;

  create table user_roles
  (
    user_id integer not null,
    role_id integer not null,
    created_at timestamp default now() not null,
    updated_at timestamp default now() not null,
    updated_by_user_id integer not null
  )
  ;

  comment on table user_roles is 'Stores user roles.'
  ;

  create table user_accounts
  (
    user_id integer,
    account_id integer not null,
    created_at timestamp default now() not null,
    updated_at timestamp default now() not null,
    updated_by_user_id integer not null
  )
  ;

  comment on table user_accounts is 'Store accounts per user. A sherpa might work for 2 or more different companies(accounts)'
  ;

  create table roles
  (
    role_id integer not null
    constraint roles_role_id_pk
    primary key,
    name varchar(45) not null,
    description varchar(255) not null,
    created_at timestamp default now() not null,
    updated_at timestamp default now() not null,
    updated_by_user_id integer not null
  )
  ;

  comment on table roles is 'Stores user roles'
  ;

  create table forms
  (
    form_id integer not null
    constraint forms_form_id_pk
    primary key,
    vertical_id integer not null,
    name varchar(60) not null,
    title varchar(255) not null,
    description text not null,
    created_at timestamp default now() not null,
    updated_at timestamp default now() not null,
    updated_by_user_id integer not null,
    notes varchar(255)
  )
  ;

  comment on table forms is 'Stores forms'
  ;

  create table form_submissions
  (
    form_submission_id integer not null
    constraint form_submissions_form_submission_id_pk
    primary key,
    user_id integer not null,
    form_id integer not null,
    created_at timestamp default now() not null,
    updated_at timestamp default now() not null,
    updated_by_user_id integer not null
  )
  ;

  comment on table form_submissions is 'Stores form submissions'
  ;

  create table form_submission_answers
  (
    form_submission_answer_id integer not null
    constraint form_submission_answers_form_submission_answer_id_pk
    primary key,
    form_submission_id integer not null,
    form_question_id integer not null,
    type varchar(20),
    answer text,
    is_file boolean default false not null,
    created_at timestamp default now() not null,
    updated_at timestamp default now() not null,
    updated_by_user_id integer not null
  )
  ;

  comment on table form_submission_answers is 'Stores form submission answers'
  ;

  create table form_structures
  (
    form_id integer not null
    constraint form_structure_form_id_pk
    primary key,
    structure json not null,
    created_at timestamp default now() not null,
    updated_at timestamp default now() not null,
    updated_by_user_id integer not null
  )
  ;

  comment on table form_structures is 'Defines the form structure for a specific form'
  ;

  create table form_questions
  (
    form_question_id integer not null
    constraint form_questions_form_question_id_pk
    primary key,
    question varchar(255) not null,
    data_type varchar(45) not null,
    default_options json not null,
    created_at timestamp default now() not null,
    updated_at timestamp default now() not null,
    updated_by_user_id integer not null,
    notes varchar(255)
  )
  ;

  comment on table form_questions is 'Stores form questions'
  ;

  create table accounts
  (
    account_id integer not null
    constraint accounts_account_id_pk
    primary key,
    user_id integer not null,
    name varchar(60) not null,
    account_type_id integer,
    is_licensed boolean default true not null,
    attributes json,
    created_at timestamp default now() not null,
    updated_at timestamp default now() not null,
    updated_by_user_id integer not null
  )
  ;

  comment on table accounts is 'store account data'
  ;

  create table account_verticals
  (
    account_id integer not null,
    vertical_id integer not null,
    is_licensed boolean default false not null,
    created_at timestamp default now() not null,
    updated_at timestamp default now() not null,
    updated_by_user_id integer not null
  )
  ;

  comment on table account_verticals is 'Stores verticals available per each Account'
  ;
`

const drop_init_tables = `
  drop table verticals;
  drop table users;
  drop table user_verticals;
  drop table user_roles;
  drop table user_accounts;
  drop table roles;
  drop table forms;
  drop table form_submissions;
  drop table form_submission_answers;
  drop table form_structures;
  drop table form_questions;
  drop table accounts;
  drop table account_verticals;
`
