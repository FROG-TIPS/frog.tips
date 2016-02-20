from frog.christmas_tree_monster import Tip


def init_db(app, db):
    db.init_app(app)
    db.app = app

    if app.config['DEBUG']:
        # TODO: DON'T DO THIS IN HERE
        Tip.metadata.create_all(bind=db.engine)
        db.session.add(Tip(number=1, tip='DO NOT TEST FROG AS THIS MAY DAMAGE FROG.', approved=True))
        db.session.commit()
