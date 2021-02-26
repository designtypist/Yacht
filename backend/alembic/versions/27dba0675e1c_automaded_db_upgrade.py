"""automaded db upgrade

Revision ID: 27dba0675e1c
Revises: 
Create Date: 2021-02-26 10:03:45.638924

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '27dba0675e1c'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('template_item', sa.Column('mem_limit', sa.JSON(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('template_item', 'mem_limit')
    # ### end Alembic commands ###