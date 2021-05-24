create table if not exists tasks (
    id int unsigned auto_increment,
    title varchar(255) not null,
    task_status varchar(255) not null,
    primary key (id)
)