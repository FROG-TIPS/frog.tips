#!/usr/bin/env python
# -*- coding: utf-8 -*-
from setuptools import setup, find_packages

version = '1.0.0'

setup(
    name='frog',
    packages=find_packages("src"),
    package_dir={"": "src"},
    include_package_data=True,
    zip_safe=False,
    version=version,
    description='FROG TIPS FOR ALL',
    author='FROG-TIPS',
    classifiers=[
        'Private',
    ],
    install_requires=[
        'flask == 0.10.1',
        'flask-sqlalchemy == 2.1',
        'pyasn1 == 0.1.9',
    ],
    license='Private',
)